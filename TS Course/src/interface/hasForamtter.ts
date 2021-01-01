export default interface HasFormatter {
	format(): string;
	// any class that implements this interface must have a format method that returns a string
}
