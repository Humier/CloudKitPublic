window.addEventListener('cloudkitloaded', function() {
	CloudKit.configure({
	containers: [ {
		containerIdentifier: 'icloud.Humier.CloudKitText', 
		apiToken: 'cd5cdab50e589b79221dbbf713531aabc8d16914c537db7a9208a907b767df47',
		environment: 'development'
}]

});