import { getPosts } from '@/utils/utils';
import { Grid } from '@once-ui-system/core';
import Post from './Post';
import { postNumbering } from '@/resources';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
    showNumbers?: boolean;
}

export function Posts({
    range,
    columns = '1',
    thumbnail = false,
    direction,
    showNumbers = false
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', 'blog', 'posts']);

    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    // Calculate post numbers (oldest = #1, newest = highest number)
    const totalPosts = sortedBlogs.length;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post, index) => {
                        // Calculate numbering based on configuration
                        const postPosition = range ? range[0] + index : index + 1;
                        let calculatedNumber;
                        
                        if (showNumbers && postNumbering.enabled) {
                            if (postNumbering.reverse) {
                                // Oldest post = #1, newest = highest number
                                calculatedNumber = totalPosts - postPosition + 1;
                            } else {
                                // Newest post = #1, oldest = highest number  
                                calculatedNumber = postPosition;
                            }
                        }
                        
                        return (
                            <Post
                                key={post.slug}
                                post={post}
                                thumbnail={thumbnail}
                                direction={direction}
                                postNumber={calculatedNumber}
                            />
                        );
                    })}
                </Grid>
            )}
        </>
    );
}