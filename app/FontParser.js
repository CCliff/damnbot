class FontParser {

  constructor (conf) {
    this.font = conf.font;
  }

  parse (text, charEmoji, whitespaceEmoji) {
    text = text.toLowerCase();
    const textArr = text.split('').filter((c) => {
      return Object.keys(this.font).includes(c);
    });
    const encoded = textArr.map(this._encodeLetter.bind(this));
    const joined = this._join(encoded);
    const interpolated = this._interpolate(joined, charEmoji, whitespaceEmoji);

    return interpolated;
  }

  _encodeLetter (letter) {
    const fontLetter = this.font[letter].split('');
    const height = this.font.height;
    const width = parseInt(fontLetter.shift());

    const encoded = [];
    for (let i = 0; i < height; i++) {
      encoded.push(fontLetter.splice(0, width));
    }

    return encoded;
  }

  _join (encodedText) {
    const height = this.font.height;
    const concated = [];

    for (let i = 0; i < height; i++) {
      concated[i] = concated[i] || [];

      encodedText.forEach((letter) => {
        concated[i] = concated[i].concat(letter[i]);
        concated[i].push('0');
      });
    }

    const joined = concated.map((row) => {
      return row.join('');
    }).join('\n');

    return joined;
  }

  _interpolate (joinedText, charEmoji, whitespaceEmoji) {
    const interpolated = joinedText.replace(/0|1/gi, (matched) => {
      return matched === '1' ? charEmoji : whitespaceEmoji;
    });

    return interpolated;
  }

}

module.exports = FontParser;