import * as ts from 'typescript';
import fs from "fs"
export default function(program: ts.Program, pluginOptions: {}) {
	fs.rmdirSync(`${program.getCompilerOptions().outDir}`, { recursive: true });
	return (ctx: ts.TransformationContext) => (sourceFile: ts.SourceFile) => sourceFile;
}

