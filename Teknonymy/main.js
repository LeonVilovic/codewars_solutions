function teknonymize(familyTree) {
    //debugger
    //console.log(familyTree);

    function iterateTree(obj, depth = 0) {

        let objOut = {};
        objOut.depth = depth;
        objOut.dateOfBirth = obj.dateOfBirth;
        objOut.name = obj.name;
        //console.log(' '.repeat(depth * 2) + obj.name); 

        obj.children.forEach(child => {
            let obj2 = iterateTree(child, depth + 1);

            if (obj2.depth > objOut.depth) {
                objOut.depth = obj2.depth;
                objOut.name = obj2.name;
                objOut.dateOfBirth = obj2.dateOfBirth;
            }
            if (obj2.depth == objOut.depth && obj2.dateOfBirth < objOut.dateOfBirth) {
                objOut.dateOfBirth = obj2.dateOfBirth;
                objOut.name = obj2.name;
            }

        });

        if (depth < objOut.depth) {
            if (obj.sex == 'm') {
                if (objOut.depth - depth == 1) {
                    obj.teknonym = 'father of ' + objOut.name;
                }
                if (objOut.depth - depth > 1) {
                    obj.teknonym = 'great-'.repeat(objOut.depth - depth - 2) + 'grandfather of ' + objOut.name;
                }

            }
            if (obj.sex == 'f') {
                if (objOut.depth - depth == 1) {
                    obj.teknonym = 'mother of ' + objOut.name;
                }
                if (objOut.depth - depth > 1) {
                    obj.teknonym = 'great-'.repeat(objOut.depth - depth - 2) + 'grandmother of ' + objOut.name;
                }
            }
        }

        return objOut;
    }

    // Call the function with the root object
    iterateTree(familyTree)
}
