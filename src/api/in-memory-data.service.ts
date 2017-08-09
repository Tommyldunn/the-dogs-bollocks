export class InMemoryDataService {
  createDb() {
    const shows = [
      {
        id: 1,
        venueImage: '/assets/images/carra.png',
        venueImage_class: 'black',
        venueName: 'Carraghers',
        venueLink: 'http://carraghersnyc.com/',
        venueAddress: '228 W 39th St, New York, NY 10018',
        date: 'Sunday Aug 27'
      }, {
        id: 2,
        venueImage: '/assets/images/arlenesgrocery.jpg',
        venueImage_class: 'black',
        venueName: 'Arlenes Grocery',
        venueLink: 'http://www.arlenesgrocery.net/',
        venueAddress: '95 Stanton St. NYC',
        date: 'Saturday Sep 16'
      }, {
        id: 3,
        venueImage: '/assets/images/carra.png',
        venueImage_class: 'black',
        venueName: 'Carraghers',
        venueLink: 'http://carraghersnyc.com/',
        venueAddress: '228 W 39th St, New York, NY 10018',
        date: 'Sunday Oct 1'
      }, {
        id: 4,
        venueImage: '/assets/images/carra.png',
        venueImage_class: 'black',
        venueName: 'Carraghers',
        venueLink: 'http://carraghersnyc.com/',
        venueAddress: '228 W 39th St, New York, NY 10018',
        date: 'Sunday Oct 14'
      }
    ];
    return { shows };
  }
}
