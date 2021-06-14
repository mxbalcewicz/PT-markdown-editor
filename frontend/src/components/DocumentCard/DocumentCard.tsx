import React from 'react';
import { Card, CardLinkLabel, CardHeader, CardLink } from './styled';
import { Document } from 'store/docs/slice';
import { createEditLink, createReadLink } from 'utils/docs';
import { Row } from 'components/Grid';
import Button from 'components/Button';
import { useTheme } from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { deleteOne as deleteDocument } from '../../store/docs/actions';

export interface IDocumentCardProps {
  document: Document;
}

const DocumentCard: React.VFC<IDocumentCardProps> = ({ document }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [editPath, editLink] = createEditLink(document.hash);
  const [readPath, readLink] = createReadLink(document.readHash);

  const handleDelete = async () => {
    await dispatch(deleteDocument(document.hash));
  };

  return (
    <Card>
      <CardHeader>{document.title}</CardHeader>

      <CardLinkLabel>Edit link</CardLinkLabel>
      <CardLink href={editPath}>{editLink}</CardLink>

      <CardLinkLabel>Read-only link</CardLinkLabel>
      <CardLink href={readPath}>{readLink}</CardLink>

      <Row justify="flex-end">
        <Button color={theme.colors.error} text sm onClick={handleDelete}>
          Delete
        </Button>
      </Row>
    </Card>
  );
};

DocumentCard.defaultProps = {};

export default DocumentCard;
