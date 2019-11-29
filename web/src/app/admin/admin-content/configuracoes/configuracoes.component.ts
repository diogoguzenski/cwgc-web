import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../../auth/services/data.service';
import { Option } from '../../../auth/interfaces/option.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  sdarklogo: String;
  slightlogo: String;
  selectedFile: File;
  form = this.fb.group({
    sitename: [''],
    sitedesc: [''],
    siteurl: [''],
    gtagmaneger: [''],
    ganalytics: [''],

    enterprisephone:[''],
    enterprisewhatsapp:[''],
    enterpriseaddress:[''],
    enterpriseemail:[''],
    enterprisefacebook:[''],
    enterpriseinstagram:[''],
    enterprisegoogleplus:[''],
    enterprisetwitter:[''],
    enterprisevimeo:[''],
    enterpriseyoutube:[''],
    enterprisepinterest:[''],
    
    lighttitlecolor: [''],
    lightcontentcolor: [''],
    darktitlecolor: [''],
    darkcontentcolor: [''],
    headercolor: [''],
    headerlinkcolor: [''],
    footercolor: [''],
    footercontentcolor: [''],

    lightlogo: [null],
    darklogo: [null]
  });
  
  constructor(private dataService: DataService,private router: Router, public fb: FormBuilder) {}

  ngOnInit() {
    this.getOptions();
   }

  

  getOptions(){
    this.dataService.getOptions().subscribe(data =>{
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i].option === 'sitename' ? this.form.controls['sitename'].setValue(data[i].option_value) : false;
        data[i].option === 'sitedesc' ? this.form.controls['sitedesc'].setValue(data[i].option_value) : false;
        data[i].option === 'siteurl' ? this.form.controls['siteurl'].setValue(data[i].option_value) : false;
        data[i].option === 'gtagmaneger' ? this.form.controls['gtagmaneger'].setValue(data[i].option_value) : false;
        data[i].option === 'ganalytics' ? this.form.controls['ganalytics'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisephone' ? this.form.controls['enterprisephone'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisewhatsapp' ? this.form.controls['enterprisewhatsapp'].setValue(data[i].option_value) : false;
        data[i].option === 'enterpriseaddress' ? this.form.controls['enterpriseaddress'].setValue(data[i].option_value) : false;
        data[i].option === 'enterpriseemail' ? this.form.controls['enterpriseemail'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisefacebook' ? this.form.controls['enterprisefacebook'].setValue(data[i].option_value) : false;
        data[i].option === 'enterpriseinstagram' ? this.form.controls['enterpriseinstagram'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisegoogleplus' ? this.form.controls['enterprisegoogleplus'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisetwitter' ? this.form.controls['enterprisetwitter'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisevimeo' ? this.form.controls['enterprisevimeo'].setValue(data[i].option_value) : false;
        data[i].option === 'enterpriseyoutube' ? this.form.controls['enterpriseyoutube'].setValue(data[i].option_value) : false;
        data[i].option === 'enterprisepinterest' ? this.form.controls['enterprisepinterest'].setValue(data[i].option_value) : false;
        data[i].option === 'lighttitlecolor' ? this.form.controls['lighttitlecolor'].setValue(data[i].option_value) : false;
        data[i].option === 'lightcontentcolor' ? this.form.controls['lightcontentcolor'].setValue(data[i].option_value) : false;
        data[i].option === 'darktitlecolor' ? this.form.controls['darktitlecolor'].setValue(data[i].option_value) : false;
        data[i].option === 'darkcontentcolor' ? this.form.controls['darkcontentcolor'].setValue(data[i].option_value) : false;
        data[i].option === 'headercolor' ? this.form.controls['headercolor'].setValue(data[i].option_value) : false;
        data[i].option === 'headerlinkcolor' ? this.form.controls['headerlinkcolor'].setValue(data[i].option_value) : false;
        data[i].option === 'footercolor' ? this.form.controls['footercolor'].setValue(data[i].option_value) : false;
        data[i].option === 'footercontentcolor' ? this.form.controls['footercontentcolor'].setValue(data[i].option_value) : false;
        data[i].option === 'lightlogo' ? this.form.controls['lightlogo'].setValue(data[i].option_value) : false;
        data[i].option === 'lightlogo' ? this.slightlogo=data[i].option_value : false;
        data[i].option === 'darklogo' ? this.form.controls['darklogo'].setValue(data[i].option_value) : false;
        data[i].option === 'darklogo' ? this.sdarklogo=data[i].option_value : false;
      }
    });
  }

  onFileChanged(event,logo) {
    this.selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    this.dataService.uploadFile(formData).subscribe((response) => {var url = response; this.onUpload(url,logo)});
  }

  onUpload(value,logo) {
    if (logo===0){
      var lightlogo: Option = {id:null, option: 'lightlogo', option_value: value.url};
      this.dataService.updateOption(lightlogo).subscribe((response) => {
      console.log(response)
      this.getOptions();
    },
      (error) => console.log(error));
    } else if (logo===1){
      var darklogo: Option = {id:null, option: 'darklogo', option_value: value.url};
      this.dataService.updateOption(darklogo).subscribe((response) => {
        console.log(response)
        this.getOptions();
      },(error) => console.log(error));
      this.getOptions();
    }
  }

  submitForm() {
    console.log(this.form.value);
    var formData: any = new FormData();
    //formData.append("siteurl", this.form.get('name').value);
    // formData.append("sitedesc", this.form.get('sitedesc').value);
    // formData.append("sitename", this.form.get('sitename').value);
    // formData.append("avatar", this.form.get('avatar').value);

    var sitename: Option = {id:null, option: 'sitename', option_value:this.form.get('sitename').value};
    var sitedesc: Option = {id:null, option: 'sitedesc', option_value:this.form.get('sitedesc').value};
    var siteurl: Option = {id:null, option: 'siteurl', option_value:this.form.get('siteurl').value};
    var gtagmaneger: Option = {id:null, option: 'gtagmaneger', option_value:this.form.get('gtagmaneger').value};
    var ganalytics: Option = {id:null, option: 'ganalytics', option_value:this.form.get('ganalytics').value};
    var enterprisephone: Option = {id:null, option: 'enterprisephone', option_value:this.form.get('enterprisephone').value};
    var enterprisewhatsapp: Option = {id:null, option: 'enterprisewhatsapp', option_value:this.form.get('enterprisewhatsapp').value};
    var enterpriseaddress: Option = {id:null, option: 'enterpriseaddress', option_value:this.form.get('enterpriseaddress').value};
    var enterpriseemail: Option = {id:null, option: 'enterpriseemail', option_value:this.form.get('enterpriseemail').value};
    var lighttitlecolor: Option = {id:null, option: 'lighttitlecolor', option_value:this.form.get('lighttitlecolor').value};
    var lightcontentcolor: Option = {id:null, option: 'lightcontentcolor', option_value:this.form.get('lightcontentcolor').value};
    var darktitlecolor: Option = {id:null, option: 'darktitlecolor', option_value:this.form.get('darktitlecolor').value};
    var darkcontentcolor: Option = {id:null, option: 'darkcontentcolor', option_value:this.form.get('darkcontentcolor').value};
    var headercolor: Option = {id:null, option: 'headercolor', option_value:this.form.get('headercolor').value};
    var headerlinkcolor: Option = {id:null, option: 'headerlinkcolor', option_value:this.form.get('headerlinkcolor').value};
    var footercolor: Option = {id:null, option: 'footercolor', option_value:this.form.get('footercolor').value};
    var footercontentcolor: Option = {id:null, option: 'footercontentcolor', option_value:this.form.get('footercontentcolor').value};
    var facebook: Option = {id:null, option: 'enterprisefacebook', option_value:this.form.get('enterprisefacebook').value};
    var instagram: Option = {id:null, option: 'enterpriseinstagram', option_value:this.form.get('enterpriseinstagram').value};
    var googleplus: Option = {id:null, option: 'enterprisegoogleplus', option_value:this.form.get('enterprisegoogleplus').value};
    var twitter: Option = {id:null, option: 'enterprisetwitter', option_value:this.form.get('enterprisetwitter').value};
    var vimeo: Option = {id:null, option: 'enterprisevimeo', option_value:this.form.get('enterprisevimeo').value};
    var youtube: Option = {id:null, option: 'enterpriseyoutube', option_value:this.form.get('enterpriseyoutube').value};
    var pinterest: Option = {id:null, option: 'enterprisepinterest', option_value:this.form.get('enterprisepinterest').value};
    
    this.dataService.updateOption(facebook).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(instagram).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(googleplus).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(twitter).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(vimeo).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(youtube).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(pinterest).subscribe((response) => console.log(response),(error) => console.log(error));    
    this.dataService.updateOption(sitename).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(sitedesc).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(siteurl).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(gtagmaneger).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(ganalytics).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(enterprisephone).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(enterprisewhatsapp).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(enterpriseaddress).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(enterpriseemail).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(lighttitlecolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(lightcontentcolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(darktitlecolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(darkcontentcolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(headercolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(headerlinkcolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(footercolor).subscribe((response) => console.log(response),(error) => console.log(error));
    this.dataService.updateOption(footercontentcolor).subscribe((response) => {this.router.navigate(['../admin']),console.log(response)},(error) => console.log(error));
  }

  changeColor(event, element){
    console.log(event, element);
    element === 1 ? this.form.controls['lighttitlecolor'].setValue(event): false;
    element === 2 ? this.form.controls['lightcontentcolor'].setValue(event): false;
    element === 3 ? this.form.controls['darktitlecolor'].setValue(event): false;
    element === 4 ? this.form.controls['darkcontentcolor'].setValue(event): false;
    element === 5 ? this.form.controls['headercolor'].setValue(event): false;
    element === 6 ? this.form.controls['headerlinkcolor'].setValue(event): false;
    element === 7 ? this.form.controls['footercolor'].setValue(event): false;
    element === 8 ? this.form.controls['footercontentcolor'].setValue(event): false;
   }


}