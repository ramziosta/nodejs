const fs = require("node:fs");

async function readThisFile(filepath) {
    try {
        // Check file existence with improved clarity and error handling
        await fs.promises.access(filepath);

        const data = await fs.promises.readFile(filepath, "utf8"); //english text, use different language if needed

        //Checks iof file is empty
        if (data.length === 0) {
            console.log(`File at path ${filepath} is empty.`);
        } else {
            console.log(`File data for ${filepath} is: ${data}`);
            // Remove leading/trailing whitespace and split into words
            const cleanedData = data.replace(/(?!\b'\b)[\p{P}\p{S}]/gu, '');
            const words = cleanedData.trim().split(" " );
            // Count only valid words
            const validWordCount = words.filter((word) => word.match(/^\w+$/)).length;
            console.log(`${filepath}: ${validWordCount} words.`);
        }
    } catch (error) {
        console.error(`Err reading file ${filepath}:`, error);
    }
}

readThisFile("files/file1.txt");
readThisFile("files/file2.txt");
readThisFile("files/file3.txt");
readThisFile("files/file4.txt");
