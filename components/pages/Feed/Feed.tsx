import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, RefreshControl} from "react-native";
import Picture from './Picture';
import Loader from "../../Loader";
import {fetchPictures, picturesActions} from "../../../redux/features/picturesSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/typedHooks";

export interface IPicture {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}

const Feed = () => {
    const {
        pictures,
        nextPage,
        loading,
        refreshing
    } = useAppSelector(state => state.pictures)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPictures(1));
    }, []);

    const handleEndReached = () => {
        dispatch(fetchPictures(nextPage));
    }

    const handleRefresh = () => {
        dispatch(picturesActions.refreshPage);
        if (refreshing){
            dispatch(fetchPictures(1));
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={pictures}
                renderItem={({item}) => <Picture item={item}/>}
                keyExtractor={(item: IPicture) => item.id}
                ListFooterComponent={loading ? <Loader/> : null}
                onMomentumScrollEnd={handleEndReached}
                refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaebed',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Feed;