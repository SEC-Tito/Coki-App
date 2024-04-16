import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  @ViewChild('audioElement') audioElement: any;
  constructor() { }

  ngOnInit() {
  }
  stopAll(){
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.pause();
  }
  playAudio() {
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.src = 'assets/audio/juaquin.mp3';
    audio.load();
    audio.play();
    console.log(`Reproduciendo: ${audio.src}`);
  }
}
