import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box } from '@mui/material'
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridPaginationModel,
} from '@mui/x-data-grid'
import { FilterParams, Pagination } from 'models/Common'
import { PostPayload } from 'models/Post'
import { useCallback } from 'react'

export interface PostListProps {
  loading?: boolean
  data?: any[]
  pagination?: Pagination
  filterParams?: FilterParams
  onPaginationModelChange?: (model: GridPaginationModel) => void
  onEditClick?: (payload: PostPayload) => void
  onRemoveClick?: (payload: PostPayload) => void
}

export function PostList({
  data = [],
  loading,
  pagination,
  filterParams = { page: 1, limit: 10 },
  onEditClick,
  onRemoveClick,
  onPaginationModelChange,
}: PostListProps) {
  const rows = data.map((item, idx) => ({
    ...item,
    key: idx,
    id: item._id,
  }))

  const columns = useCallback((): GridColDef[] => {
    return [
      {
        field: 'key',
        headerName: '#',
        align: 'center',
        headerAlign: 'center',
        width: 64,
      },
      {
        field: 'imageUrl',
        headerName: 'Image',
        align: 'center',
        headerAlign: 'center',
        minWidth: 120,
        flex: 1,
        sortable: false,

        renderCell: ({ row }) => {
          return (
            <Box component="img" height="100%" alt="image" src={row.imageUrl} />
          )
        },
      },
      {
        field: 'author',
        headerName: 'Author',
        minWidth: 300,
        flex: 1,
        sortable: false,
      },
      {
        field: 'title',
        headerName: 'Name',
        minWidth: 300,
        flex: 1,
        sortable: false,
      },
      {
        field: 'shortDescription',
        headerName: 'Short Description',
        minWidth: 300,
        flex: 1,
        sortable: false,
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        minWidth: 300,
        sortable: false,
      },
      {
        field: 'actions',
        headerName: '',
        type: 'actions',
        renderCell: ({ row: product }) => {
          return (
            <>
              <GridActionsCellItem
                icon={<EditOutlinedIcon color="primary" />}
                label="Edit"
                onClick={() => onEditClick?.(product as PostPayload)}
              />
              <GridActionsCellItem
                icon={<DeleteOutlineOutlinedIcon color="error" />}
                label="Remove"
                onClick={() => onRemoveClick?.(product as PostPayload)}
              />
            </>
          )
        },
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])()

  return (
    <DataGrid
      getRowId={(row) => row.id}
      loading={loading}
      rows={rows}
      columns={columns}
      pagination
      rowHeight={100}
      paginationMode="server"
      rowCount={pagination?.total || 0}
      pageSizeOptions={[10]}
      disableColumnMenu
      onPaginationModelChange={(model) => onPaginationModelChange?.(model)}
      onRowClick={({ row }) => onEditClick?.(row as PostPayload)}
      paginationModel={{
        page: filterParams.page - 1,
        pageSize: filterParams.limit,
      }}
    />
  )
}
