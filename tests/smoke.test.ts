import { exec } from "child_process";
import path from "path"
import fs from "fs"


process.chdir(path.resolve(__dirname,"smoke"))
fs.rmdirSync("./dist",{ recursive: true });
fs.mkdirSync("./dist",{ recursive: true });
const filename = new Date().getTime()+".txt";
fs.writeFileSync(`./dist/${filename}`,filename);
jest.setTimeout(30000);
test('smoke test', (done) => {
	
	expect(fs.statSync(`./dist/${filename}`).isFile()).toEqual(true);
	exec("npm run build",(error,stdout,stderr)=>{
		expect(fs.existsSync(`./dist/${filename}`)).toEqual(false);
		expect(fs.statSync(`./dist/types`).isDirectory()).toEqual(true);
		expect(fs.statSync(`./dist/index.js`).isFile()).toEqual(true);
		expect(fs.statSync(`./dist/sum.js`).isFile()).toEqual(true);
		
		done()
	})
});
