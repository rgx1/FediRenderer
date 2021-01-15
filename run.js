#!/usr/bin/env node

let Handlebars = require("handlebars");
let fs = require("fs");

if (process.argv.length < 3) {
    console.error("Usage: node run.js <accountDir>");
    process.exit(1);
}
let accountDir = process.argv[2];

let template = Handlebars.compile(fs.readFileSync(__dirname+"/template.html", "utf8"));
let data = {
    items: [],
};

let json = JSON.parse(fs.readFileSync(accountDir+"/outbox.json"));
for (let item of json.orderedItems) {
    if (item.type == "Create") {
        let tmpl = {
            date: item.published,
            text: item.object.content,
            url: item.object.url,
        };
        if (item.object.attachment != null && item.object.attachment.length > 0) {
            let attachment = item.object.attachment[0];
            let url = attachment.url.replace(/.*\/(media_attachments)\//, "$1/");
            if (attachment.mediaType.startsWith("image/")) {
                tmpl.image = url;
            } else {
                tmpl.video = url;
            }
        }
        data.items.push(tmpl);
    }
}

let outFile = accountDir+"/outbox.html";
fs.writeFileSync(outFile, template(data));
console.log("Wrote "+outFile);
