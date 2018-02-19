#!/usr/bin/env ruby

=begin
Deploy my Markdowns in ruby.
1. generate htmls based on meta-information
2. that's all
=end

$markdown = "markdown/"
$dst_dir = "markdown_sites/"
$temp_dir = "tmp/"
$tempMD = "tmp/temp.md"
$index = "tmp/index.md"

if not File.exist? $markdown then `mkdir "#{$markdown}"` end
if not File.exist? $dst_dir then `mkdir "#{$dst_dir}"` end
if not File.exist? $temp_dir then `mkdir "#{$temp_dir}"` end

def scan(directory)
  Dir.entries(directory).reject {|entry| entry[0] == '.'}.each do |item|
    item_path = File.join directory, item
    if File.directory? item_path
      scan item_path
    elsif File.extname(item_path) == '.md'
      convert(item_path)
    end
  end
end

def convert(markdown_filename)
  meta = Hash.new
  markdown = File.open(markdown_filename, "r")
  tempfile = File.open($tempMD, "w")
  if markdown.eof? then p "Empty Markdown file", markdown_filename; return end
  line = markdown.readline
  if (line.strip == "cheer")
    loop do
      if markdown.eof? then p "Invalid Format(Loss cheer)", markdown_filename; return end
      line = markdown.readline
      if line.strip == "cheer"
        if markdown.eof?
          line = ''
          break
        else 
          line = markdown.readline
          break
        end
      end
      info = line.strip.split(':')
      if info.count != 2 then p "Invalid Format(Multiple :)"; return end
      meta[info[0].strip] = info[1].strip
    end
  end
  loop do
    tempfile.write(line)
    if markdown.eof?
      markdown.close
      tempfile.close
      generate($tempMD, meta)
      return
    end
    line = markdown.readline()
  end
end

def generate(tempfile, meta)
  if not meta["title"] then p "Invalid Format(Loss title)"; return end
  dst = File.join $dst_dir, meta["title"] + ".html"
  if not File.exist? dst
    print "Generating " ,dst, "\n"
	File.open(dst, "w").close
    `pandoc #{tempfile} -o "#{dst}" -c Github.css`
    i = File.open($index, "a")
    i.write("[#{meta["title"]}](#{dst})\n\n")
    i.close
  end
end

scan($markdown)
`pandoc #{$index} -o index.html -c Github.css`
