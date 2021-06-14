import React from 'react';
import DocumentCard from 'components/DocumentCard';
import { Document } from 'store/docs/slice';
import { Col, Row } from 'components/Grid';
import { ProductsListEmpty } from './DocumentsList.styled';
import { Link } from 'react-router-dom';
import Paths from 'constants/paths';
import Button from 'components/Button';
import { useTheme } from 'styled-components';

export interface IDocumentsListProps {
  documents?: Document[];
}

const DocumentsList: React.VFC<IDocumentsListProps> = ({ documents = [] }) => {
  const theme = useTheme();
  const isAnyDocumentAvailable = documents?.length > 0;

  const header = (
    <Row justify="space-between" align="center">
      <h2>Your documents</h2>
      <Link to={Paths.CreateNew}>
        <Button color={theme.colors.primary}>Create new document</Button>
      </Link>
    </Row>
  );

  const documentsList = (
    <Row>
      {documents.map((document) => (
        <Col cols={12} md={6} xl={4} xxl={3} key={document.hash}>
          <DocumentCard document={document} />
        </Col>
      ))}
    </Row>
  );

  const emptyList = (
    <Row justify="center">
      <ProductsListEmpty>there are no documents</ProductsListEmpty>
    </Row>
  );

  return (
    <>
      {header}
      {isAnyDocumentAvailable ? documentsList : emptyList}
    </>
  );
};

export default DocumentsList;
