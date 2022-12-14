import { Entity } from '../utils';

export class Game extends Entity {
  public Entities: Entity[] = [];
  private _lastTimestamp = 0;

  public Awake(): void {
    super.Awake();

    for (const entity of this.Entities) {
      //Call Awaken on all child entities
      entity.Awake();
    }

    // Wait until next frame all the components finish Awakening
    window.requestAnimationFrame(() => {
      //Set initial time
      this._lastTimestamp = Date.now();

      //Enter recursive update loop
      this.Update();
    });

    this.DirtyDraw();
  }

  private DirtyDraw(): void {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '500px');
    canvas.setAttribute('height', '500px');
    document.body.appendChild(canvas);

    const size = 50;
    const offset = 10;
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const ctx = canvas.getContext('2d')!;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.rect((size + offset) * x, (size + offset) * y, size, size);
        ctx.fill();
      }
    }
  }

  public Update(): void {
    //Get the time difference
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000;

    //Updates all components
    super.Update(deltaTime);

    //Updates all child entities

    for (const entity of this.Entities) {
      entity.Update(deltaTime);
    }

    //Updates the time
    this._lastTimestamp = Date.now();

    //Recursively call this function on every frame to keep the game looping
    window.requestAnimationFrame(() => this.Update());
  }
}
