class UkPostcode {

    constructor(value) {
      this._valid = false;
      this._formatted = '';
      this.value = value;
    }

    set value(value) {
      this._value = value;

        // Permitted letters depend upon their position in the postcode.
      const alpha1 = '[abcdefghijklmnoprstuwyz]';   // Character 1
      const alpha2 = '[abcdefghklmnopqrstuvwxy]';   // Character 2
      const alpha3 = '[abcdefghjkpmnrstuvwxy]';     // Character 3
      const alpha4 = '[abehmnprvwxy]';              // Character 4
      const alpha5 = '[abdefghjlnpqrstuwxyz]';      // Character 5
      const BFPOa5 = '[abdefghjlnpqrst]{1}';        // BFPO character 5
      // const BFPOa6 = '[abdefghjlnpqrstuwzyz]{1}';   // BFPO character 6

      const exp = [ ];

        // Expression for BF1 type postcodes
      exp[0] = '(bf1)( *)([0-9]{1}' + BFPOa5 + BFPOa5 + ')';

        // Expression for postcodes: AN NAA, ANN NAA,
        // AAN NAA, and AANN NAA with a space
      exp[1] = '(' + alpha1 + '{1}' + alpha2 +
          '{0,1}[0-9]{1,2})( *)([0-9]{1}' + alpha5 + '{2})';

        // Expression for postcodes: ANA NAA
      exp[2] = '(' + alpha1 + '{1}[0-9]{1}' + alpha3 + '{1})( *)([0-9]{1}' +
          alpha5 + '{2})';

        // Expression for postcodes: AANA NAA
      exp[3] = '(' + alpha1 + '{1}' + alpha2 + '{1}[0-9]{1}' + alpha4 +
          ')( *)([0-9]{1}' + alpha5 + '{2})';

        // Exception for the special postcode GIR 0AA
      exp[4] = '(gir)( *)(0aa)';

        // Standard BFPO numbers
      exp[5] = '(bfpo)( *)([0-9]{1,4})';

        // c/o BFPO numbers
      exp[6] = '(bfpo)( *)(c\/o( *)[0-9]{1,3})';

        // Overseas Territories
      exp[7] = '([a-z]{4})( *)(1zz)';

        // Anquilla
      exp[8] = 'ai-2640';

      const postcode = this._value.replace(/\s/g,'').toLowerCase();

      for (let i = 0; i < exp.length; i++) {
        const re = new RegExp(exp[i]);
        if (re.test(postcode)) {
          const match = re.exec(postcode);
          this._formatted = (match[1] + ' ' + match[3]).toUpperCase();
          this._valid = true;
          return this._formatted;
        }
      }

      this._valid = false;
    }

    raw() {
      return this._value;
    }

    isValid() {
      return this._valid;
    }

    formatted() {
      if ( this.isValid( ) ) {
        return this._formatted;
      }
      return this.raw( );
    }
}

export { UkPostcode };
