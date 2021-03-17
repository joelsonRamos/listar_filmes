import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filmes = [];
  buscaId =[];
  ids=[];

  constructor(private homeService: HomeService) { }

  ngOnInit(){
  }

  getFilme(event:any){
    const filme = event.target.value;
    this.homeService.buscarFilme(filme).then(res =>{
      
      this.filmes = res.Search;
      console.log(this.filmes);
      
      
      // this.homeService.buscarId()
      
    })
    
    this.filmes.forEach(filmes => {
      console.log(filmes['imdbID']);
      this.homeService.buscarId(filmes['imdbID']).then(data =>{
        this.ids = data;
        console.log(this.ids)
      })
      })
  }
}
