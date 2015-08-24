import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut
    , mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App(mockedRouter);
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: '', name: 'welcome', moduleId: 'welcome', nav: false, title:'Welcome' });
  });

  it('should have a carry capacity route', () => {
    expect(sut.router.routes).toContain({ route: 'carryCapacity', name: 'carryCapacity', moduleId: 'carryCapacity', nav: true, title:'Carry Capacity' });
  });
});
