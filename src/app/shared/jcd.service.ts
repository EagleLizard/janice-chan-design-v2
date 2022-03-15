

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JcdProject, JcdProjectDetails, JcdProjectPage } from './jcd-entities';
import { isObject } from './validate-primitives';


import queryString, { ParsedQuery, ParsedUrl } from 'query-string';

export interface ResizeUriOpts {
  uri: string;
  width?: number;
  height?: number;
}

import {
  JCD_BASE_URI,
  JCD_IMAGE_BASEPATH,
} from './constants';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

@Injectable({
  providedIn: 'root',
})
export class JcdService {
  constructor(
    private http: HttpClient,
  ) {}

  async getProjects(): Promise<JcdProject[]> {
    let rawRespData: any, rawProjects: unknown[];
    let projects: JcdProject[];
    rawRespData = await this.http.get(`${JCD_BASE_URI}/jcd/v0/project`).toPromise();
    try {
      if(
        !isObject(rawRespData?.projects)
        || !Array.isArray(rawRespData?.projects)
      ) {
        throw new Error('/jcd/v0/project response has an incorrect schema');
      }
      rawProjects = rawRespData.projects;
      projects = rawProjects.map(JcdProject.deserialize);
      return projects;
    } catch(e) {
      console.error(e);
      throw new Error('/jcd/v0/project endpoint returned unexpected datatype');
    }
  }

  async getProject(projectRoute: string): Promise<JcdProject> {
    let rawProject: unknown[], uri: string;
    let resp: Response, rawRespData: any;
    let project: JcdProject;
    uri = `${JCD_BASE_URI}/jcd/v0/project/${projectRoute}`;
    rawRespData = await this.http.get(uri).toPromise();
    try {
      if(!isObject(rawRespData?.project)) {
        throw new Error(`/jcd/v0/project/${projectRoute} response has an incorrect schema`);
      }
      rawProject = rawRespData.project;
      project = JcdProject.deserialize(rawProject);
      return project;

    } catch(e) {
      console.error(e);
      throw new Error(`/jcd/v0/project/${projectRoute} endpoint returned unexpected datatype`);
    }
  }

  async getProjectPage(projectKey: string): Promise<JcdProjectPage> {
    let rawProjectPage: unknown[], uri: string;
    let resp: Response, rawRespData: any;
    let projectPage: JcdProjectPage;
    uri = `${JCD_BASE_URI}/jcd/v0/project/page/${projectKey}`;
    rawRespData = await this.http.get(uri).toPromise();
    try {
      if(!isObject(rawRespData?.projectPage)) {
        throw new Error(`/jcd/v0/project/page/${projectKey} response has an incorrect schema`);
      }
      rawProjectPage = rawRespData.projectPage;
      projectPage = JcdProjectPage.deserialize(rawProjectPage);
      return projectPage;

    } catch(e) {
      console.error(e);
      throw new Error(`/jcd/v0/project/page/${projectKey} endpoint returned unexpected datatype`);
    }
  }

  getImageUri(resource: string): string {
    return `${JCD_IMAGE_BASEPATH}${resource}`;
  }

  getDisplayDate(projectDetails: JcdProjectDetails): string {
    let month: number, year: number;
    let displayDate: string;
    month = projectDetails.month - 1; // subtract 1 because JS months are 0 indexed
    year = projectDetails.year;
    displayDate = `${MONTH_NAMES[month]} ${year}`;
    return displayDate;
  }

  getResizedUri(opts: ResizeUriOpts) {
    let parsedUri: ParsedUrl, parsedQuery: ParsedQuery;
    let resizedUri: string;
    const {
      uri,
      width,
      height,
    } = opts;
    parsedUri = queryString.parseUrl(uri);
    parsedQuery = parsedUri.query;
    if(opts.width !== undefined) {
      parsedQuery.width = width + '';
    }
    if(opts.height !== undefined) {
      parsedQuery.height = height + '';
    }
    resizedUri = queryString.stringifyUrl({
      url: parsedUri.url,
      query: parsedQuery
    });
    return resizedUri;
  }
}
