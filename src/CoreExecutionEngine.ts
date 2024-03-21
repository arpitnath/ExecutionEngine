// // CoreExecutionEngine.ts
// export class CoreExecutionEngine {
//   private static actionQueue: Array<() => void> = [];
//   private static isProcessing = false;

//   static enqueueAction(action: () => void) {
//     this.actionQueue.push(action);
//     if (!this.isProcessing) {
//       this.processQueue();
//     }
//   }

//   private static processQueue() {
//     this.isProcessing = true;
//     while (this.actionQueue.length > 0) {
//       const action = this.actionQueue.shift();
//       action?.();
//     }
//     this.isProcessing = false;
//   }
// }

// CoreExecutionEngine.ts
export class CoreExecutionEngine {
  private static actionQueue: Array<() => void> = [];
  private static isProcessing = false;

  static enqueueAction(action: () => void) {
    console.log("[CoreExecutionEngine] Enqueueing action");
    this.actionQueue.push(action);
    console.log(`[CoreExecutionEngine] Queue size: ${this.actionQueue.length}`);
    if (!this.isProcessing) {
      console.log("[CoreExecutionEngine] Starting process queue");
      this.processQueue();
    }
  }

  private static processQueue() {
    this.isProcessing = true;
    console.log("[CoreExecutionEngine] Processing queue");
    while (this.actionQueue.length > 0) {
      console.log("[CoreExecutionEngine] Executing action from queue");
      const action = this.actionQueue.shift();
      action?.();
      console.log(`[CoreExecutionEngine] Queue size after action: ${this.actionQueue.length}`);
    }
    console.log("[CoreExecutionEngine] Queue processed, no more actions to execute");
    this.isProcessing = false;
  }
}
