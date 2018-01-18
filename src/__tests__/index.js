import {expect} from 'chai';
import {UkPostcode} from '../';
const {describe, it} = global;

describe('construct()', function() {
    it('should create a new instance', function() {
        let p = new UkPostcode('B1 1BL')
        expect(p).to.be.an('object');
        expect(p).to.be.an.instanceof(UkPostcode);
    });
    it('should set the value and make it available via raw()', function() {
        let p = new UkPostcode('B1 1BL')
        expect(p.raw()).to.be.a('string');
        expect(p.raw()).to.equal('B1 1BL');
    });
});

describe('isValid()', function() {
    it('should return true for a valid AN NAA postcode', function() {
        let p = new UkPostcode('B1 1BL')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
        let p2 = new UkPostcode('M1 2WQ')
        expect(p2.isValid()).to.be.a('boolean');
        expect(p2.isValid()).to.equal(true)
    });
    it('should return true for a valid ANN NAA postcode', function() {
        let p = new UkPostcode('B44 8JP')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
        let p2 = new UkPostcode('B44 8JP')
        expect(p2.isValid()).to.be.a('boolean');
        expect(p2.isValid()).to.equal(true)
    });
    it('should return true for a valid AAN NAA postcode', function() {
        let p = new UkPostcode('RM1 3ED')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
        let p2 = new UkPostcode('HD3 3AE')
        expect(p2.isValid()).to.be.a('boolean');
        expect(p2.isValid()).to.equal(true)
    });
    it('should return true for a valid AANN NAA postcode', function() {
        let p = new UkPostcode('AB10 1AL')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return true for a valid ANA NAA postcode', function() {
        let p = new UkPostcode('W1W 8TD')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return true for the special case postcode GIR 0AA', function() {
        let p = new UkPostcode('GIR 0AA')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return true despite no spaces', function() {
        let p = new UkPostcode('B448JP')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return true despite extra spaces', function() {
        let p = new UkPostcode('   B 44 8J P      ')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return true despite having lower case letters', function() {
        let p = new UkPostcode('b44 8jp')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(true)
    });
    it('should return false for invalid starting letter', function() {
        let p = new UkPostcode('Q44 8JP') // postcodes cannot start with a Q
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(false)
    });
    it('should return false for invalid postcode AB10 123', function() {
        let p = new UkPostcode('AB10 123') // postcodes cannot start with a Q
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(false)
    });
    it('should return false for random string', function() {
        let p = new UkPostcode('i am a fish')
        expect(p.isValid()).to.be.a('boolean');
        expect(p.isValid()).to.equal(false)
    });
});

describe('format()', function() {
    it('should format a valid AN NAA postcode', function() {
        let p = new UkPostcode('B1 1BL')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('B1 1BL')
    });
    it('should format a valid ANN NAA postcode', function() {
        let p = new UkPostcode('B44 8JP')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('B44 8JP')
    });
    it('should format a valid AANN NAA postcode', function() {
        let p = new UkPostcode('AB10 1AL')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('AB10 1AL')
    });
    it('should format a valid ANA NAA postcode', function() {
        let p = new UkPostcode('W1W 8TD')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('W1W 8TD')
    });
    it('should format the special case postcode GIR 0AA', function() {
        let p = new UkPostcode('gIr 0aA')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('GIR 0AA')
    });
    it('should add a space when formatting', function() {
        let p = new UkPostcode('B448JP')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('B44 8JP')
    });
    it('should remove any extra spaces', function() {
        let p = new UkPostcode('   B 44 8J P      ')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('B44 8JP')
    });
    it('should convert lowercase characters to upper case', function() {
        let p = new UkPostcode('b44 8jp')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('B44 8JP')
    });
    it('should return as-is for invalid starting letter', function() {
        let p = new UkPostcode('Q44 8JP') // postcodes cannot start with a Q
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('Q44 8JP')
    });
    it('should return as-is for invalid postcode AB10 123', function() {
        let p = new UkPostcode('AB10 123') // postcodes cannot start with a Q
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('AB10 123')
    });
    it('should return as-is for random string', function() {
        let p = new UkPostcode('i am a fish')
        expect(p.formatted()).to.be.a('String');
        expect(p.formatted()).to.equal('i am a fish')
    });
});

describe('set()', function() {
    it('should allow value to be replaced', function() {
        let p = new UkPostcode('B1 1BL')
        expect(p._value).to.equal('B1 1BL');
        expect(p.formatted()).to.equal('B1 1BL')
        expect(p.isValid()).to.equal(true)
        p.value = 'M1 2WQ'
        expect(p._value).to.equal('M1 2WQ');
        expect(p.formatted()).to.equal('M1 2WQ')
        expect(p.isValid()).to.equal(true)
        p.value = 'i am a fish'
        expect(p._value).to.equal('i am a fish');
        expect(p.formatted()).to.equal('i am a fish')
        expect(p.isValid()).to.equal(false)
    });
});
