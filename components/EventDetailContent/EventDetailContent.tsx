import { Box, Typography } from "@mui/material"

export interface EventDetailContentProps {
    tracks?: {
        name: string, 
        talks?: {
            title: string, 
            speaker: string, 
            speakerJob?: string, 
            time: Date
        }[]
    }[]
}

const EventDetailContent: React.FC<EventDetailContentProps> = ({tracks}:EventDetailContentProps) => {
    const defaultWidth = '1345px'
    if (tracks) {
        return (
            <Box sx={{height: '688px', display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background: '#212236'}}>
                <Box sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px'}}>
                    <Typography variant="h3" sx={{color: 'white'}}>Conteúdo</Typography>
                    {tracks.map((track) => {
                        let talksBlock
                        if (track.talks) {
                            talksBlock = <Box sx={{display: 'flex', gap: '36px'}}>
                                {track.talks.map((talk) => {
                                    const talkTime = `${talk.time.getHours().toString().padStart(2, '0')}h${talk.time.getMinutes().toString().padStart(2, '0')}`
                                    return (
                                        <Box key={talk.title} sx={{background: 'white', borderRadius: '10px'}}>
                                            <Box sx={{background: 'linear-gradient(180.06deg, rgba(33, 34, 54, 0.15) 0.05%, #212236 74.97%)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '362px', width: '254px'}}>
                                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '16px'}}>
                                                    <Box>{talkTime}</Box>
                                                </Box>
                                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px'}}>
                                                    <Typography variant="h4" sx={{fontSize: '20px', background: 'linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)', backgroundClip: 'text', color: 'transparent'}}>
                                                        {talk.title}
                                                    </Typography>
                                                    <Typography variant="h5" sx={{fontSize: '16px'}}>{talk.speaker}</Typography>
                                                    <Typography>{talk.speakerJob || '&nbsp;'}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                        }
                        return (
                        <Box key={track.name} sx={{width: defaultWidth, display: 'flex', flexDirection: 'column', gap: '24px'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Typography variant="h4" sx={{color: '#04FFB4', flex: 1}}>{track.name}</Typography>
                                <Box sx={{flex: 3, height: 0, border: '1px dashed #04FFB4'}}></Box>
                            </Box>
                            {talksBlock}
                        </Box>)
                    })}
                </Box>
            </Box>
        )
    }
    return <Box></Box>
}

export default EventDetailContent