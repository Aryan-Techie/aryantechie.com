"use client";

import { Column, Flex, Heading, Media, SmartLink, Tag, Text, Row } from '@once-ui-system/core';
import styles from './Posts.module.scss';
import { formatDate } from '@/utils/formatDate';
import { PostNumber } from './PostNumber';
import { postNumbering } from '@/resources';

interface PostProps {
    post: any;
    thumbnail: boolean;
    direction?: "row" | "column";
    postNumber?: number;
    hideFromNav?: boolean;
}

export default function Post({ post, thumbnail, direction, postNumber, hideFromNav = false }: PostProps) {
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={direction}
                radius="l"
                className={styles.hover}
                mobileDirection="column"
                fillWidth>
                {postNumber && postNumbering.enabled && (
                    <PostNumber 
                        number={postNumber}
                        style={postNumbering.style as 'badge' | 'minimal' | 'outline'}
                        position={postNumbering.position as 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
                    />
                )}
                {post.metadata.image && thumbnail && (
                    <Media
                        priority
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 640px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={post.metadata.image}
                        alt={'Thumbnail of ' + post.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column
                    position="relative"
                    fillWidth gap="4"
                    padding="24"
                    vertical="center">
                    {hideFromNav ? (
                        <Text
                            variant="heading-strong-l"
                            as="div"
                            wrap="balance">
                            {post.metadata.title}
                        </Text>
                    ) : (
                        <Heading
                            as="h2"
                            variant="heading-strong-l"
                            wrap="balance">
                            {post.metadata.title}
                        </Heading>
                    )}
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                    { post.metadata.tag &&
                        <Tag
                            className="mt-12"
                            label={post.metadata.tag}
                            variant="neutral" />
                    }
                </Column>
            </Flex>
        </SmartLink>
    );
}