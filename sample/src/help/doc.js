import registry from './registry.json!';
import jQuery from 'jquery';
import 'kendo-ui/js/kendo.panelbar.min';

export class Doc {

  constructor() {
    this.registry = registry;

    this.categories = [];
    for (let category of Object.keys(this.registry)) {
      this.categories.push({
        name: category,
        files: this.registry[category]
      });
    }
  }

  attached() {
    $(this.panelbar).kendoPanelBar();
  }

  scrollToTop() {
    jQuery(this.markdownCol).animate({ scrollTop: 0 });
  }
}
