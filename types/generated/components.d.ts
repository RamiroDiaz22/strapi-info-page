import type { Schema, Struct } from '@strapi/strapi';

export interface ContactMeSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_contact_me_social_medias';
  info: {
    displayName: 'Social media';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['twitter', 'instagram', 'facebook', 'whatsapp']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ContactMeWhy extends Struct.ComponentSchema {
  collectionName: 'components_contact_me_whies';
  info: {
    description: '';
    displayName: 'Why';
  };
  attributes: {
    reasons: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface HeroHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_images';
  info: {
    displayName: 'hero-image';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
  };
}

export interface HomeAboutMe extends Struct.ComponentSchema {
  collectionName: 'components_home_about-me';
  info: {
    displayName: 'about-me';
  };
  attributes: {
    desciptionImage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    services: Schema.Attribute.Component<'services.services', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface HomeContactMe extends Struct.ComponentSchema {
  collectionName: 'components_home_contact-me';
  info: {
    description: '';
    displayName: 'contact-me';
  };
  attributes: {
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
    location: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    timetables: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    why: Schema.Attribute.Component<'contact-me.why', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface HomeFooter extends Struct.ComponentSchema {
  collectionName: 'components_home_footer';
  info: {
    displayName: 'footer';
  };
  attributes: {
    socialMedia: Schema.Attribute.Component<'contact-me.social-media', true>;
  };
}

export interface HomeHeader extends Struct.ComponentSchema {
  collectionName: 'components_home_header';
  info: {
    displayName: 'header';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_hero';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
    heroImage: Schema.Attribute.Component<'hero.hero-image', false> &
      Schema.Attribute.Required;
  };
}

export interface HomePortfolio extends Struct.ComponentSchema {
  collectionName: 'components_home_projects';
  info: {
    description: '';
    displayName: 'projects';
  };
  attributes: {
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
    works: Schema.Attribute.Relation<'oneToMany', 'api::work.work'>;
  };
}

export interface HomeService extends Struct.ComponentSchema {
  collectionName: 'components_home_service';
  info: {
    description: '';
    displayName: 'service';
  };
  attributes: {
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    comments: Schema.Attribute.Component<'testimonials.comments', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    head: Schema.Attribute.Component<'section.new-section', false> &
      Schema.Attribute.Required;
  };
}

export interface ProfessionsProfesiones extends Struct.ComponentSchema {
  collectionName: 'components_professions_profesiones';
  info: {
    description: '';
    displayName: 'Profesiones';
  };
  attributes: {
    active: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    categories: Schema.Attribute.Enumeration<
      [
        'electricidad',
        'alba\u00F1ileria',
        'placas',
        'plomeria',
        'mantenimiento',
        'carpinteria',
        'construccion',
        'reformas',
      ]
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 90;
      }>;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project-projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 25;
      }>;
    preview: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SectionNewSection extends Struct.ComponentSchema {
  collectionName: 'components_section_new_sections';
  info: {
    description: '';
    displayName: 'New section';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }>;
  };
}

export interface TestimonialsComments extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_comments';
  info: {
    displayName: 'Comments';
  };
  attributes: {
    comment: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 140;
      }>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-me.social-media': ContactMeSocialMedia;
      'contact-me.why': ContactMeWhy;
      'hero.hero-image': HeroHeroImage;
      'home.about-me': HomeAboutMe;
      'home.contact-me': HomeContactMe;
      'home.footer': HomeFooter;
      'home.header': HomeHeader;
      'home.hero': HomeHero;
      'home.portfolio': HomePortfolio;
      'home.service': HomeService;
      'home.testimonial': HomeTestimonial;
      'professions.profesiones': ProfessionsProfesiones;
      'project.project': ProjectProject;
      'section.new-section': SectionNewSection;
      'services.services': ServicesServices;
      'testimonials.comments': TestimonialsComments;
    }
  }
}
