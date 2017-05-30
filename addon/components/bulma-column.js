import Ember from 'ember';
import layout from '../templates/components/bulma-column';
import { _responsiveHelpers, _gridBindings } from '../constants';

const {
  Component,
  inject: { service },
  get,
  set
} = Ember;

export default Component.extend({
  layout,
  classNames: ['column'],
  // REVIEW can this property and the concatBindings method be combined as an es5 get or computed?
  classNameBindings: [],

  /**
    Combine all of bulmas grid specific classes with responsive helper classes

    @method concatBindings
    @private
  */
  concatBindings() {
    let gridBindings = get(this, 'gridBindings.all');
    set(this, 'classNameBindings', ['content'].concat(_gridBindings, _responsiveHelpers));
  },

  init() {
    this._super(...arguments);
    this.concatBindings();
  }
});
