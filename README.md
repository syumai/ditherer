# ditherer

A CLI tool to convert PNG into dithered image.

* This tool is using [floyd-steinberg](https://github.com/noopkat/floyd-steinberg) as dithering algorithm.

## Installation

```
npm install -g ditherer
```

## Usage

```
cat img.png | ditherer > img-dithered.png
```

## Example

### Input

![input image](https://user-images.githubusercontent.com/6882878/167286021-8d1811e7-126e-440e-98f1-274db59b924d.png)

### Output

![output image](https://user-images.githubusercontent.com/6882878/167286023-9707270f-c9c2-4bf6-9857-99e8b2924aea.png)

## License

MIT

## Author

syumai
