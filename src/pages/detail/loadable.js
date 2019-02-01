import React from 'react';
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>正在加载...</div>
    }
});

export default () => <LoadableBar/>

