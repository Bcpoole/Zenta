import {PageObject_Welcome} from './welcome.po.js';
import {PageObject_Skeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  var po_welcome,
      po_skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Zenta');
  });

  it('should display greeting', () => {
    expect(po_welcome.getHeading()).toBe('Zenta - A Pathfinder Utility App!');
  });

  it('should navigate to Carry Capacity page', () => {
    po_skeleton.navigateTo('#/carryCapacity');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Carry Capacity | Zenta');
  });

  it('should navigate to Character Creation page', () => {
    po_skeleton.navigateTo('#/characterCreation');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Character Creation | Zenta');
  });

  it('should navigate to Dice Roller page', () => {
    po_skeleton.navigateTo('#/diceRoller');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Dice Roller | Zenta');
  });
});
