import { Entity } from '../utils';

export class Game extends Entity {
  private _lastTimestamp = 0;

  public Awake(): void {
    super.Awake();
  }

  public Update(): void {
    //Get the time difference
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000;

    //Updates all components
    super.Update(deltaTime);

    //Updates the time
    this._lastTimestamp = Date.now();

    //Recursively call this function on every frame to keep the game looping
    window.requestAnimationFrame(() => this.Update());
  }
}
