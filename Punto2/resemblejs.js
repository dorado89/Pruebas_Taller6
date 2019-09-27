const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff(file1, file2, output) {

    const options = {
        ignoreLess: true
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
            await fs.readFile(file1),
            await fs.readFile(file2),
            options
            );

    await fs.writeFile(output, data.getBuffer());
}

getDiff("./busq_profe.js/1569539883533.png", "./busq_profe.js/1569539883538.png", "./resemblejs_out/busq_profe.png");
getDiff("./diri_profe.js/1569539646531.png", "./diri_profe.js/1569539646533 (5).png", "./resemblejs_out/diri_profe.png");
getDiff("./filtro_profe.js/1569539979470.png", "./filtro_profe.js/1569539979473 (3).png", "./resemblejs_out/filtro_profe.png");