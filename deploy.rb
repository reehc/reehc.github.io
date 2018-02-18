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

function scan(directory)
  for item in directory
    if item is a directory then scan directory + item end
    else if item is a .md file then convert(item) end
    else do nothing
  end
end

function convert(markdown)
  meta = []
  if (markdown.getline()[0] == "#")
    while(markdown.getline()[0] != "#")
      meta.append()
    end
  end
  while(markdown.getline())
    tempfile.write()
  end
  generate(tempfile, meta)
end

function generate(tempfile, meta)
  // convert to html
end

scan(markdown)
`rm -rf tmp`
