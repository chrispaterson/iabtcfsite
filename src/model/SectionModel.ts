import {RouteConfig} from 'vue-router';
import Landing from '../components/pages/Landing.vue';
import TCStringEncode from '../components/pages/TCStringEncode.vue';
import TCStringDecode from '../components/pages/TCStringDecode.vue';
import {LinkModel} from '../model/LinkModel';

class SectionModel extends Map {

  public constructor() {

    super();

    this.init();

  }
  private init(): void {

    const encoder: LinkModel = new LinkModel('Encode', TCStringEncode);
    const decoder: LinkModel = new LinkModel('Decode', TCStringDecode);

    this.set('TCString', [encoder, decoder]);

  }

  public getRouteConfig(): RouteConfig[] {

    const routes: RouteConfig[] = [
      {path: '/', name: 'home', component: Landing},
    ];

    this.forEach((links: LinkModel[]): void => {

      links.forEach((link: LinkModel): void => {

        routes.push({
          path: '/'+link.path,
          name: link.title,
          component: link.component,
        });

      });

    });

    return routes;

  }

}

export {SectionModel};
