TEX=simple

LATEX:
	@rm -rf build
	@mkdir build
	@cp ${TEX}.tex build
	@cd build && latex ${TEX}.tex &&dvipdf ${TEX}.dvi
	@cp build/${TEX}.pdf .
	@echo PDF is generated!

preview: LATEX
	@gvfs-open ${TEX}.pdf

clean:
	@rm -rf build ${TEX}.pdf
