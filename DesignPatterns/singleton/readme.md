### Singleton Method

When we want to restrict the number of instances to create, we use Singleton Method

Example:
We have a class ProcessManager, and ideally, there should be only 1 process manager in a system
In this case, we can use Singleton Method

```js

const Singleton = (function() {
    function ProcessManager() {
        this.numOfProcess = 0;
    }

    let pManager;

    function createProcessManager() {
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager() {
            if(!pManager) {
                pManager = createProcessManager();
            }

            return pManager;
        }
    }
})();

// if not IIFE
// const processManager = Singleton().getProcessManager();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);

```