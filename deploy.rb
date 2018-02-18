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

function generate(tempfile, meta)
  // convert to html
  // add link to index.html
  // maybe pandoc !
end

scan(markdown)
`rm -rf tmp`
