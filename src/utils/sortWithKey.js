const sortWithKey = (key , value) => {
    var collator = new Intl.Collator("fa");
    switch (key){
        case 'date' : return value.sort((a, b) => new Date(b[key]) - new Date(a[key]));
        default : return value.sort((a, b) => collator.compare(a[key], b[key]));
    }
}

export default sortWithKey;