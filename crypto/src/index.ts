import * as CryptoJS from "crypto-js";

class Block {
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	constructor(
		index: number,
		hash: string,
		previousHash: string,
		data: string,
		timestamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}

	static calculateBlockHash = (
		index: number,
		previousHash: string,
		data: string,
		timestamp: number
	): string => {
		return CryptoJS.SHA256(index + previousHash + data + timestamp).toString();
	};

	static validateStructure = (aBlock: Block): boolean =>
		typeof aBlock.index === "number" &&
		typeof aBlock.hash === "string" &&
		typeof aBlock.data === "string" &&
		typeof aBlock.timestamp === "number";
}

const genesisBlock: Block = new Block(0, "68489489489894", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock]; // Block[] means blockChain is an array of Blocks

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const newTimestamp: number = getNewTimestamp();
	const newHash: string = Block.calculateBlockHash(
		newIndex,
		previousBlock.hash,
		data,
		newTimestamp
	);

	const newBlock: Block = new Block(
		newIndex,
		newHash,
		previousBlock.hash,
		data,
		newTimestamp
	);

	addBlock(newBlock);

	return newBlock;
};

const getHashForBlock = (block: Block): string =>
	Block.calculateBlockHash(
		block.index,
		block.previousHash,
		block.data,
		block.timestamp
	);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
		return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index) {
		return false;
	} else if (previousBlock.hash !== candidateBlock.previousHash) {
		return false;
	} else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
		return false;
	} else {
		return true;
	}
};

const addBlock = (candidateBlock: Block): void => {
	if (isBlockValid(candidateBlock, getLatestBlock())) {
		blockChain.push(candidateBlock);
	}
};

createNewBlock("new block 1");
createNewBlock("new block 2");
createNewBlock("new block 3");

console.log(blockChain);

export {};
