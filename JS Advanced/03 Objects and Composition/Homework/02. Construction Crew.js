function solve(objWorker) {
    if (objWorker.dizziness === true) {
        objWorker.levelOfHydrated += 0.1 * objWorker.weight * objWorker.experience;
        objWorker.dizziness = false

    }

    return objWorker;
};

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));