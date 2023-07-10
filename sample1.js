function Download() {
    const ms = Math.floor( Math.random() * 4000 ) + 3000;
    const t1 = Number( new Date() );
    while ( true ) {
        if ( ( Number( new Date() ) - t1 > ms ) ) {
            break;
        }
    }
    return "/download/files.zip";
}

console.log( "Im Webbrowser:" );

console.log( "User klickt auf 'Download'" );
let file = Download();

console.log( `Download von ${ file } vollständig.` );
