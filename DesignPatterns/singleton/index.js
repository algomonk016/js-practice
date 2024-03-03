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