describe('User Factory', function() {
  var Users;
  var userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      location: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      location: 'Chicago',
      twitter: 'jimbo'
    },
    {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill'
    }
  ];

  beforeEach(module('myApp'));
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {
    it ('should exists', function() {
      expect(Users.all).toBeDefined();
    });
    it ('should return a hard coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    it ('should exists', function() {
      expect(Users.findById).toBeDefined();
    });
  });
});