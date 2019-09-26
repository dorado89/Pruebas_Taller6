const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile("./cypress/screenshots/vrt.js/Los estudiantes search -- Visits los estudiantes and search teacher.png"),
        await fs.readFile("./cypress/screenshots/vrt.js/Los estudiantes search -- Visits los estudiantes and search teacher (1).png")
    );

    await fs.writeFile("./output.png", data.getBuffer());
}

getDiff();