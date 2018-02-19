#!/usr/bin/env ruby

=begin
Deploy my Markdowns in ruby.
1. generate htmls based on meta-information
2. that's all
=end

markdown = "markdown/"
destination = "markdown_sites/"
$tmp = "tmp/"
index = "index.html"

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
  meta = Array.new
  markdown = File.open(markdown_filename, "r")
  tempfile = File.open(File.join($tmp,"temp"), "w")
  if markdown.eof? then p "Empty Markdown file", markdown_filename; return end
  line = markdown.readline
  if (line.strip == "cheer")
    loop do
      if markdown.eof? then p "Invalid Format", markdown_filename; return end
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
      meta.append(line)
    end
  end
  loop do
    tempfile.write(line)
    if markdown.eof?
      markdown.close
      tempfile.close
      generate(File.join($tmp,"temp"), meta)
	  return
    end
    line = markdown.readline()
  end
end

def generate(tempfile, meta)
  print "Generating " ,tempfile, meta
end

scan(markdown)
