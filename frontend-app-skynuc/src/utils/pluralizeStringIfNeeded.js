function pluralizeStringIfNeeded(count, string, suffix = 's') {
    return `${count} ${string}${count !== 1 ? suffix : ''}`;
}

export default pluralizeStringIfNeeded;
