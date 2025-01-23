export interface ArticlesT {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result extends ArticlesT{
    id:           number;
    title:        string;
    authors:      Author[];
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     Launch[];
    events:       Event[];
}

export interface Author extends Result{
    name:    string;
    socials: Socials;
}

export interface Socials extends Author{
    x:         string;
    youtube:   string;
    instagram: string;
    linkedin:  string;
    mastodon:  string;
    bluesky:   string;
}

export interface Event extends Result{
    event_id: number;
    provider: string;
}

export interface Launch extends Result{
    launch_id: string;
    provider:  string;
}