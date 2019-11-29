import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.model";
import { environment } from "../../../environments/environment";
import { Funnel } from "../interfaces/funnel.model";
import { Lead } from "../interfaces/lead.model";
import { Option } from "../interfaces/option.model";
import { FunnelLevel } from "../interfaces/funnellevel.model";
import { Postmeta } from "../interfaces/postmeta.model";
import { Form } from "../interfaces/form.model";

@Injectable()

export class DataService{

    constructor(private httpClient: HttpClient){
    }

    getPages():Observable<Post[]>{
        //return this.httpClient.get('http://127.0.0.1:8000/api/posts/');
        return this.httpClient.get<Post[]>(`${environment.api_url}/posts/page`);
    }
    createPage(page: Post): Observable<Post>{
        return this.httpClient.post<Post>(`${environment.api_url}/posts`, page);
      }
    updatePage(page: Post){
        return this.httpClient.put<Post>(`${environment.api_url}/posts/${page.id}`,page);
    }
    deletePage(id: number){
        return this.httpClient.delete<Post>(`${environment.api_url}/posts/${id}`);
      }
    getPage(id:number){
        return this.httpClient.get<any>(`${environment.api_url}/posts/${id}`);
    }
    

    getPosts():Observable<Post[]>{
        //return this.httpClient.get('http://127.0.0.1:8000/api/posts/');
        return this.httpClient.get<Post[]>(`${environment.api_url}/posts/lpost`);
    }
    createPost(post: Post): Observable<Post>{
        return this.httpClient.post<Post>(`${environment.api_url}/posts`, post);
    }
    updatePost(post: Post){
        return this.httpClient.put<Post>(`${environment.api_url}/posts/${post.id}`,post);
    }
    deletePost(id: number){
        return this.httpClient.delete<Post>(`${environment.api_url}/posts/${id}`);
      }
    getPost(id:number){
        return this.httpClient.get<any>(`${environment.api_url}/posts/${id}`);
    }

    updatePostMeta(postmetas: Postmeta, id:number){
        return this.httpClient.put<Postmeta>(`${environment.api_url}/metas/${id}`,postmetas);
    }
    createPostMeta(postmetas: Postmeta): Observable<Postmeta>{
        return this.httpClient.post<Postmeta>(`${environment.api_url}/metas`, postmetas);
    }

    getFunnels():Observable<Funnel[]>{
        return this.httpClient.get<Funnel[]>(`${environment.api_url}/funnels`);
    }
    createFunnel(funnel: Funnel): Observable<Funnel>{
        return this.httpClient.post<Funnel>(`${environment.api_url}/funnels`, funnel);
      }
    updateFunnel(funnel: Funnel){
        return this.httpClient.put<Funnel>(`${environment.api_url}/funnels/${funnel.id}`,funnel);
    }
    deleteFunnel(id: number){
        return this.httpClient.delete<Funnel>(`${environment.api_url}/funnels/${id}`);
      }
    getFunnel(id:number){
        return this.httpClient.get<Funnel>(`${environment.api_url}/funnels/${id}`);
    }


    getFunnelsLevels(id:number){
        return this.httpClient.get<FunnelLevel[]>(`${environment.api_url}/funnelslevels/${id}`);
    }
    createFunnelLevel(funnellevel: FunnelLevel): Observable<FunnelLevel>{
        return this.httpClient.post<FunnelLevel>(`${environment.api_url}/funnelslevels`, funnellevel);
      }
    updateFunnelLevel(funnellevel: FunnelLevel){
        return this.httpClient.put<FunnelLevel>(`${environment.api_url}/funnelslevels/${funnellevel.id}`,funnellevel);
    }
    deleteFunnelLevel(id: number){
        return this.httpClient.delete<FunnelLevel>(`${environment.api_url}/funnelslevels/${id}`);
      }
    getFunnelLevel(id:number){
        return this.httpClient.get<FunnelLevel>(`${environment.api_url}/funnelslevels/${id}`);
    }
    
    getLeadsFunnelLevel(id:number){
        return this.httpClient.get<Lead[]>(`${environment.api_url}/leads/byfl/${id}`);
    }

    getLeads():Observable<Lead[]>{
        return this.httpClient.get<Lead[]>(`${environment.api_url}/leads`);
    }
    createLead(lead: Lead): Observable<Lead>{
        return this.httpClient.post<Lead>(`${environment.api_url}/leads`, lead);
    }
    updateLead(lead: Lead){
        return this.httpClient.put<Lead>(`${environment.api_url}/leads/${lead.id}`,lead);
    }
    deleteLead(id: number){
        return this.httpClient.delete<Lead>(`${environment.api_url}/leads/${id}`);
    }

    getForms():Observable<Form[]>{
        return this.httpClient.get<Form[]>(`${environment.api_url}/forms`);
    }
    createForm(form: Form): Observable<Form>{
        return this.httpClient.post<Form>(`${environment.api_url}/forms`, form);
    }
    updateForm(form: Form){
        return this.httpClient.put<Form>(`${environment.api_url}/forms/${form.id}`,form);
    }
    deleteForm(id: number){
        return this.httpClient.delete<Form>(`${environment.api_url}/forms/${id}`);
    }

    
    

    uploadFile(file){
        return this.httpClient.post(`${environment.api_url}/file/upload`, file);
    }


    getOptions():Observable<Option[]>{
        return this.httpClient.get<Option[]>(`${environment.api_url}/options`);
    }
    // createLead(lead: Lead): Observable<Lead>{
    //    return this.httpClient.post<Lead>(`${environment.api_url}/leads`, lead);
    // }
    updateOption(option: Option){
       return this.httpClient.put<Option>(`${environment.api_url}/options/${option.option}`,option);
    }
    //  deleteLead(id: number){
    //    return this.httpClient.delete<Lead>(`${environment.api_url}/leads/${id}`);
    // }

}