import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube-display',
  templateUrl: './cube-display.component.html',
  styleUrls: ['./cube-display.component.scss']
})
export class CubeDisplayComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('cube') cube: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.cube.nativeElement.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(3,3,3);
    var material = new THREE.MeshBasicMaterial( { color: "grey" } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );
    
    camera.position.z = 5;
    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
  }

}
