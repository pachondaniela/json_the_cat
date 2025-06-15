const { fetchBreedDescription } = require('../breedFetcher.js');
const { assert } = require('chai');


describe('fetchBreedDescription', () => {
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.body[0].description.trim());

      done();
    });
  });

  it('returns an undefined value when the breed doest exist' , (done) => {
    fetchBreedDescription('Husky' , (err,desc) => {
      //we expect no error for this scenario
      assert.equal(err,null);

      const expectedDesc = undefined;

      //compare resutls
      assert.equal(expectedDesc,desc.body[0]);
      done();
    });
  });
});