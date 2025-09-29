import React from 'react';

export interface BasePageConfig {
  path: string;
  label: string;
  title: string;
  description: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  timezone: string;
  timezoneLabel: string;
  languages: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface Newsletter {
  display: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface Home extends BasePageConfig {
  image: string;
  headline: React.ReactNode;
  subline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
}

export interface About extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      achievements: React.ReactNode[];
      images: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      description: React.ReactNode;
    }>;
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      /** Skill title */
      title: string;
      /** Skill description */
      description?: React.ReactNode;
      /** Skill tags */
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      /** Skill images */
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  opensource: {
    display: boolean;
    title: string;
    projects: Array<{
      /** Project name */
      name: string;
      /** Project URL */
      url?: string;
      /** Contribution timeframe */
      timeframe: string;
      /** Contributor role */
      role: string;
      /** Project achievements */
      achievements: React.ReactNode[];
      /** Project images */
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

export interface Blog extends BasePageConfig {
  subtitle: string;
}

export interface Work extends BasePageConfig {
  subtitle: string;
}

export interface Gallery extends BasePageConfig {
  subtitle: string;
  images: Array<{
    src: string;
    alt: string;
    title: string;
    year: string;
  }>;
}