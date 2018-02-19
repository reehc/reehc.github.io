#!/usr/bin/env ruby

=begin
Deploy my Markdowns in ruby.
1. generate htmls based on meta-information
2. that's all
=end

markdown = "markdown/"
destination = "markdown_sites/"
tmp = "tmp/"
index = "index.html"

def scan(directory)
  Dir.entries(directory).reject {|entry| entry == '.' or entry == '..'}.each do |item|
    item_path = File.join directory, item
    if File.directory? item_path
      scan item_path
    elsif File.extname(item_path) == '.md'
      convert(item_path)
    end
  end
end

def convert(markdown)
  meta = []
  line = markdown.getline()
  if (line != null and line[0] == "#")
    loops do
      line = markdown.getline()
      if line[0] == "#" then line = markdown.getline break end
      meta.append(line)
    end
  end
  while(line != NULL)
    tempfile.write()
    line = markdown.getline()
  end
  generate(tempfile, meta)
end

def generate(tempfile, meta)
  // convert to html
  // add link to index.html
  // maybe pandoc !
end

scan(markdown)
`rm -rf tmp`
